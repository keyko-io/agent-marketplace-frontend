
# **Agent Definition Schema Documentation**

This document provides a detailed explanation of the structure for agent definitions in the platform. The schema ensures that both the backend and frontend can understand and interact with the agents in a standardized manner.

## **Schema Version:** 1.0.0

---

## **Inputs**

### **Definition:**

Each input defines the data that the agent requires from the user. Inputs are used to render forms in the frontend and to validate the data before execution in the backend.

### **Fields:**

| Field        | Type        | Description                                                                            | Required | Example                                            |
|--------------|-------------|----------------------------------------------------------------------------------------|----------|----------------------------------------------------|
| `name`       | `string`    | Name of the input.                                                                     | Yes      | `"input1"`                                         |
| `type`       | `string`    | Type of input (`string`, `number`, `boolean`, `dropdown`, `textarea`).                 | Yes      | `"string"`                                         |
| `description`| `string`    | A brief description of what the input represents.                                      | Yes      | `"The first input"`                                |
| `required`   | `boolean`   | Specifies whether the input is mandatory.                                              | Yes      | `true`                                             |
| `validation` | `object`    | Validation rules for the input (depending on input type: `string`, `file`, `image`).   | No       | `{ "minLength": 3, "maxSize": 1000000 }`           |
| `values`     | `object`    | Only applicable for `dropdown`. Specifies the possible values users can select.        | No       | `{ "option1": "Option 1", "option2": "Option 2" }` |

---

### **Validation Object**

The `validation` object contains different rules depending on the type of input.

#### **For `string` inputs:**

| Field         | Type       | Description                                                                  | Required | Example                |
|---------------|------------|------------------------------------------------------------------------------|----------|------------------------|
| `minLength`   | `integer`  | Minimum length of the string. Must be greater than or equal to `0`.          | No       | `3`                    |
| `maxLength`   | `integer`  | Maximum length of the string. Must be greater than `minLength`.              | No       | `255`                  |
| `regex`       | `string`   | Regular expression pattern the string must follow.                           | No       | `"^[A-Za-z0-9]*$"`     |

---

### **Examples**

#### **String input with validation:**

```json
{
  "name": "username",
  "type": "string",
  "description": "User's username",
  "required": true,
  "validation": {
    "minLength": 5,
    "maxLength": 20,
    "regex": "^[a-zA-Z0-9_]*$"
  }
}
```

---

## **Outputs**

### **Definition:**

The output section describes what the agent returns after processing. Outputs can be text, files, or other data types. The frontend will render the appropriate output based on this configuration.

### **Fields:**

| Field        | Type        | Description                                                                         | Required | Example                                             |
|--------------|-------------|-------------------------------------------------------------------------------------|----------|-----------------------------------------------------|
| `name`       | `string`    | The name of the output.                                                             | Yes      | `"output1"`                                         |
| `type`       | `string`    | Type of output (`string`, `file`, `image`).                                         | Yes      | `"file"`                                            |
| `description`| `string`    | A brief description of what the output represents.                                  | Yes      | `"Generated image file"`                            |

---

### **Examples**

#### **Text output:**

```json
{
  "name": "translatedText",
  "type": "string",
  "description": "Translated text result"
}
```

---

## **Processing**

### **Definition:**

This section defines the processing details of the agent, including the platform, version, runtime, and dependencies needed to execute the agent code. It also includes whether the execution is asynchronous.

### **Fields:**

| Field         | Type        | Description                                                                             | Required | Example                                    |
|---------------|-------------|-----------------------------------------------------------------------------------------|----------|--------------------------------------------|
| `description` | `string`    | A brief description of the processing task.                                             | Yes      |`"Image generation using Python"`           |
| `type`        | `string`    | The type of task (e.g., `Image Generation`, `Text Generation`).                         | Yes      |`"Image Generation"`                        |
| `entrypoint`  | `string`    | The entrypoint script where the processing starts.                                      | Yes      |`"main.py"`                                 |
| `requirements`| `object`    | Information about the platform, version, runtime, and dependencies required to execute the agent. | Yes      | `{ "platform": "python", "version": "3.6", "runtime": "nodejs14.x"}`|
| `async`       | `boolean`   | Whether the execution is asynchronous.                                                  | No       |`true`                                      |

---

### **Requirements Object**

The `requirements` object specifies the platform, version, runtime, and libraries required to run the agent. This is essential for configuring the backend environment.

| Field        | Type        | Description                                                                               | Required | Example                                    |
|--------------|-------------|-------------------------------------------------------------------------------------------|----------|--------------------------------------------|
| `platform`   | `string`    | The programming language or platform the agent uses (e.g., `"python"`, `"nodejs"`).      | Yes      | `"Python"`                                 |
| `version`    | `string`    | The specific version of the platform required.                                            | Yes      | `"3.6"`                                    |
| `runtime`    | `string`    | The AWS Lambda runtime environment for the agent (e.g., `nodejs14.x`, `python3.8`).       | Yes      | `"nodejs14.x"`                             |
| `libraries`  | `array`     | List of required libraries, including their names and versions.                           | No       | `[{"name": "numpy", "version": "1.18.1"}]` |

---

### **Processing Example**

```json
{
  "processing": {
    "description": "Image generation using Python",
    "type": "Image Generation",
    "entrypoint": "main.py",
    "requirements": {
      "platform": "python",
      "version": "3.6",
      "runtime": "python3.8",
      "libraries": [
        {
          "name": "numpy",
          "version": "1.18.1"
        }
      ]
    },
    "async": true
  }
}
```

---

## **Complete JSON Example**

```json
{
  "inputs": [
    {
      "name": "username",
      "type": "string",
      "description": "User's username",
      "required": true,
      "validation": {
        "minLength": 5,
        "maxLength": 20
      }
    }
  ],
  "outputs": [
    {
      "name": "translatedText",
      "type": "string",
      "description": "Translated text result"
    }
  ],
  "processing": {
    "description": "Image generation using Python",
    "type": "Image Generation",
    "entrypoint": "main.py",
    "requirements": {
      "platform": "python",
      "version": "3.6",
      "runtime": "python3.8",
      "libraries": [
        {
          "name": "numpy",
          "version": "1.18.1"
        }
      ]
    },
    "async": false
  }
}
```