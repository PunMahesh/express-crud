const openapiSpecification = {
  openapi: "3.0.0",

  info: {
    title: "Task API",
    version: "1.0.0",
  },

  paths: {
    "/tasks": {
      get: {
        summary: "Get all tasks",

        responses: {
          "200": {
            description: "List of all tasks",
          },
        },
      },
      post: {
        summary: "Create a new task",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateTask",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Task created successfully",
          },
          "400": {
            description: "Invalid input",
          },
        },
      },
    },

    "/tasks/{id}": {
      get: {
        summary: "Get a task by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          "200": {
            description: "Task found",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Task",
                    },
                },
            },
          },
          "404": {
            description: "Task not found",
          },
        },
      },

      put: {
        summary: "Update a task by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "integer",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UpdateTask",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Task updated successfully",
          },
          "400": {
            description: "Invalid input",
          },
          "404": {
            description: "Task not found",
          },
        },
      },
      delete: {
        summary: "Delete a task by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          "204": {
            description: "Task deleted successfully",
          },
          "404": {
            description: "Task not found",
          },
        },
      },
    },
  },

  components: {
    schemas: {
      Task: {
        type: "object",

        properties: {
          id: {
            type: "integer",
          },

          title: {
            type: "string",
          },

          done: {
            type: "boolean",
          },
        },
      },
      CreateTask: {
        type: "object",
        properties: {
          title: {
            type: "string",
          },
        },
      },
      UpdateTask: {
        type: "object",
        properties: {
            title: {    
                type: "string",
            },
            done: {
                type: "boolean",
            },
        },
      },
    },
  },
};

export default openapiSpecification;
