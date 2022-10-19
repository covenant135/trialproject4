// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '6ruhibcasg'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`
export const authConfig = {

  // https://6ruhibcasg.execute-api.us-east-2.amazonaws.com/dev

  domain: 'dev-kcy-j7os.us.auth0.com',            // Auth0 domain
  clientId: '65ghLO4rqLFEgz1ss7WKisBqq6qANuyB',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
