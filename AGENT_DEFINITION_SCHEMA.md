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
| `type`       | `string`    | Type of input (`text`, `textarea`, `dropdown`, `file`, `image`).                       | Yes      | `"text"`                                           |
| `description`| `string`    | A brief description of what the input represents.                                      | Yes      | `"The first input"`                                |
| `required`   | `boolean`   | Specifies whether the input is mandatory.                                              | Yes      | `true`                                             |
| `validation` | `object`    | Validation rules for the input (depending on input type: `string`, `file`, `image`).   | No       | `{ "minLength": 3, "maxSize": 1000000 }`           |
| `values`     | `object`    | Only applicable for `dropdown`. Specifies the possible values users can select.        | No       | `{ "option1": "Option 1", "option2": "Option 2" }` |
| `multiple`   | `boolean`   | Whether multiple files can be uploaded (only type=image or type=file)                  | No       | `false`                                            |

---

### **Validation Object**

The `validation` object contains different rules depending on the type of input.

#### **For `text` and `textarea` inputs:**

| Field         | Type       | Description                                                                  | Required | Example                |
|---------------|------------|------------------------------------------------------------------------------|----------|------------------------|
| `minLength`   | `integer`  | Minimum length of the string. Must be greater than or equal to `0`.          | No       | `3`                    |
| `maxLength`   | `integer`  | Maximum length of the string. Must be greater than `minLength`.              | No       | `255`                  |
| `regex`       | `string`   | Regular expression pattern the string must follow.                           | No       | `"^[A-Za-z0-9]*$"`     |

#### **For `file` inputs:**

| Field         | Type       | Description                                                                              | Required | Example                |
|---------------|------------|------------------------------------------------------------------------------------------|----------|------------------------|
| `maxSize`     | `integer`  | Maximum file size in bytes.                                                              | No       | `1000000`              |
| `minSize`     | `integer`  | Minimum file size in bytes.                                                              | No       | `1000`                 |

#### **For `image` inputs:**

An image is a special type of file and includes additional validation options such as `width` and `height`.

| Field         | Type       | Description                                                                              | Required | Example                |
|---------------|------------|------------------------------------------------------------------------------------------|----------|------------------------|
| `width`       | `integer`  | Expected width of the image in pixels.                                                   | No       | `100`                  |
| `height`      | `integer`  | Expected height of the image in pixels.                                                  | No       | `100`                  |
| `maxSize`     | `integer`  | Maximum size of the image file in bytes.                                                 | No       | `1000000`              |
| `minSize`     | `integer`  | Minimum size of the image file in bytes.                                                 | No       | `1000`                 |

---

### **Examples**

#### **String input with validation:**

```json
{
  "name": "username",
  "type": "text",
  "description": "User's username",
  "required": true,
  "multiple": false,
  "validation": {
    "minLength": 5,
    "maxLength": 20,
    "regex": "^[a-zA-Z0-9_]*$"
  }
}
```

#### **File input with validation:**

```json
{
  "name": "documentUpload",
  "type": "file",
  "description": "Upload a document",
  "required": true,
  "multiple": true,
  "validation": {
    "maxSize": 5000000,
    "minSize": 1000
  }
}
```

#### **Image input with validation:**

```json
{
  "name": "profilePicture",
  "type": "image",
  "description": "Upload a profile picture",
  "required": true,
  "multiple": false,
  "validation": {
    "width": 100,
    "height": 100,
    "maxSize": 1000000,
    "minSize": 1000
  }
}
```

---

## **Outputs**

### **Definition:**

The output section describes what the agent returns after processing. Outputs can be text or files (images, documents, etc.). The frontend will render the appropriate output based on this configuration.

### **Fields:**

| Field        | Type        | Description                                                                         | Required | Example                                             |
|--------------|-------------|-------------------------------------------------------------------------------------|----------|-----------------------------------------------------|
| `name`       | `string`    | The name of the output.                                                             | Yes      | `"output1"`                                         |
| `type`       | `string`    | Type of output (`string`, `file`, `image`).                                         | Yes      | `"file"`                                            |
| `description`| `string`    | A brief description of what the output represents.                                  | Yes      | `"Generated image file"`                            |
| `fileOptions`| `object`    | For `file` or `image` outputs only. Specifies the file types that will be returned. | No       | `{ "accept": [".png", ".jpg"], "multiple": false }` |

---

### **File Options Object**

For `file` or `image` outputs, the `fileOptions` field provides additional options.

| Field          | Type        | Description                                                                                   | Required | Example                                   |
|----------------|-------------|-----------------------------------------------------------------------------------------------|----------|-------------------------------------------|
| `accept`       | `array`     | List of acceptable file types/extensions (`.png`, `.jpg`, `.pdf`, etc.).                      | Yes      | `[".png", ".jpg"]`                        |
| `multiple`     | `boolean`   | Whether multiple files can be generated as output.                                            | No       | `false`                                   |
| `maxSize`      | `integer`   | Maximum file size (in bytes) for the generated file(s).                                       | No       | `2000000`                                 |
| `minSize`      | `integer`   | Minimum file size (in bytes) for the generated file(s).                                       | No       | `500`                                     |

---

### **Examples**

#### **Text output:**

```json
{
  "name": "translatedText",
  "type": "text",
  "description": "Translated text result"
}
```

#### **File output with options:**

```json
{
  "name": "generatedImage",
  "type": "image",
  "description": "Generated image file",
  "fileOptions": {
    "accept": [".png", ".jpg"],
    "multiple": false,
    "maxSize": 2000000
  }
}
```

---

## **Processing**

### **Definition:**

This section defines the processing details of the agent, including the platform, version, and dependencies needed to execute the agent code. It also includes whether the execution is asynchronous.

### **Fields:**

| Field         | Type        | Description                                                                             | Required | Permitted values                          | Example                                    |
|---------------|-------------|-----------------------------------------------------------------------------------------|----------|------------------------------------------ |--------------------------------------------|
| `description` | `string`    | A brief description of the processing task.                                             | Yes      |                                           |`"Image generation with specific libraries"`|
| `type`        | `string`    | The type of task (e.g., `Image Generation`, `Text Generation`).                         | Yes      | `"Image Generation" \| "Text Generation"` |`"Image Generation"`                        |
| `requirements`| `object`   | Information about the platform, version, and dependencies required to execute the agent. | Yes      |                                           |`{ "platform": "Python", "version": "3.6" }`|
| `async`       | `boolean`   | Whether the execution is asynchronous.                                                  | No       |                                           |`true`                                      |

---

### **Requirements Object**

The `requirements` object specifies the platform, version, and libraries required to run the agent. This is essential for configuring the backend environment.

| Field        | Type        | Description                                                                               | Required | Example                                    |
|--------------|-------------|-------------------------------------------------------------------------------------------|----------|--------------------------------------------|
| `platform`   | `string`    | The programming language or platform the agent uses (e.g., `"Python"`, `"Node.js"`).      | Yes      | `"Python"`                                 |
| `version`    | `string`    | The specific version of the platform required.                                            | Yes      | `"3.6"`                                    |
| `libraries`  | `array`     | List of required libraries, including their names and versions.                           | No       | `[{"name": "numpy", "version": "1.18.1"}]` |

---

### **Processing Example**

```json
{
  "processing": {
    "description": "Image generation using Python",
    "type": "Image Generation",
    "requirements": {
      "platform": "Python",
      "version": "3.6",
      "libraries": [
        {
          "name": "numpy",
          "version": "1.18.1"
        },
        {
          "name": "pandas",
          "version": "1.0.1"
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
      "multiple": false,
      "validation": {
        "minLength": 5,
        "maxLength": 20,
        "regex": "^[a-zA-Z0-9_]*$"
      }
    },
    {
      "name": "documentUpload",
      "type": "file",
      "description": "Upload a document",
      "required": true,
      "multiple": false,
      "validation": {
        "maxSize": 5000000,
        "minSize": 1000
      }
    },
    {
      "name": "profilePicture",
      "type": "image",
      "description": "Upload a profile picture",
      "required": true,
      "multiple": false,
      "validation": {
        "width": 100,
        "height": 100,
        "maxSize": 1000000,
        "minSize": 1000
      }
    }
  ],
  "outputs": [
    {
      "name": "translatedText",
      "type": "string",
      "description": "Translated text result"
    },
    {
      "name": "generatedImage",
      "type": "image",
      "description": "Generated image file",
      "fileOptions": {
        "accept": [".png", ".jpg"],
        "multiple": false,
        "maxSize": 2000000
      }
    }
  ],
  "processing": {
    "description": "Image generation using Python",
    "type": "Image Generation",
    "requirements": {
      "platform": "Python",
      "version": "3.6",
      "libraries": [
        {
          "name": "numpy",
          "version": "1.18.1"
        },
        {
          "name": "pandas",
          "version": "1.0.1"
        }
      ]
    },
    "async": false
  }
}
```
