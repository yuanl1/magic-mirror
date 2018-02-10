
# Alexa skills lambda request handler

## Installing dependencies and building
Run the following:

```shell
npm install
```

Package this folder as a zip (including node modules) and deploy to your lambda function as a zip file.

```shell
npm run build
```

This will create a builds/lambda.zip file which you can upload to the AWS lambda function.

# Alexa interaction model

Look at this url on how to setup a new Alexa Skill:

https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial-nodejs

When setting up your alexa skill, you will need to setup an interaction model.

Here is the intent schema:

```
{
  "intents": [
    {
      "intent": "MyCommandIsIntent",
      "slots": [
        {
          "name": "Command",
          "type": "LIST_OF_COMMANDS"
        }
      ]
    },
    {
      "intent": "WhatsMyCommandsIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    }
  ]
}
```

This is the list of commands type:

```
LIST_OF_COMMANDS
```

Here are the values for LIST_OF_COMMANDS:

```
weather
subway
twitter
```

Here are the sample utterances (notice how the first word is the "intent" you defined above:

```
WhatsMyCommandsIntent what commands are available
WhatsMyCommandsIntent what commands can I say
MyCommandIsIntent show me the {Command}
MyCommandIsIntent show me {Command} times
MyCommandIsIntent show my {Command} feed
```
