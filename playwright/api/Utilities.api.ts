import { APIRequestContext, APIResponse, expect, Page } from '@playwright/test'

export class Utilities {
  private request: APIRequestContext
  private page?: Page

  constructor(request: APIRequestContext, page?: Page) {
    this.request = request
    this.page = page
  }

  statusShouldBeOk(response: APIResponse) {
    expect(response.ok()).toBe(true)
  }

  async sendGraphQLRequest(
    url: string,
    operationName: string,
    query: string,
    { variables = {} }: { variables?: object } = {}
  ) {
    return await this.request.post(url, {
      data: { operationName, query, variables }
    })
  }

  async mockRequest(url: string, mock: object) {
    await this.page?.route(url, async (route) => {
      await route.fulfill({ json: mock })
    })
  }

  async mockGraphQLRequest(operationName: string, mock: object) {
    await this.page?.route('**/api/graphql/', async (route) => {
      const request = route.request().postDataJSON()
      request.operationName === operationName
        ? await route.fulfill({ json: { data: mock } })
        : await route.continue()
    })
  }

  async interceptGraphQLRequest(operationName: string): Promise<unknown> {
    return new Promise((resolve) => {
      this.page?.on('response', async (response) => {
        if (response.url().includes('/graphql')) {
          const request = response.request().postDataJSON()
          if (request.operationName === operationName) {
            const json = await response.json()
            resolve(json)
          }
        }
      })
    })
  }
}
