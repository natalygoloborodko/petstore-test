import { Given, Then, When } from '@cucumber/cucumber';
import { apiClient } from '../api-clients/api.client';
import { userFactory } from '../factories/user.factory';
import { contextHolder } from '../services/context-holder';
import { User } from '../models/user.model';
import { expect } from 'chai';

let testUser: User;

Given('new user is created', async function () {
  contextHolder.user = userFactory.getNewUser();

  await apiClient.createUser(contextHolder.user);
});

When('I send request to find user by name', async function () {
  testUser = await apiClient.getUserByName(contextHolder.user.getUsername());
});

When('I update user data', async function () {
  testUser = contextHolder.user.setFirstName('Monica').setLastName('Geller');
  await apiClient.updateUser(testUser);
});

Then('new user information is correct', async function () {
  expect(contextHolder.user).to.deep.equal(testUser);
});

Then('user data is updated', async function () {
  const userResponse = await apiClient.getUserByName(contextHolder.user.getUsername());
  expect(userResponse).to.deep.equal(testUser);
})