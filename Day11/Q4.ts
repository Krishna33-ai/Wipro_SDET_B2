type FolderNode = {
  name: string;
  files?: string[];
  subFolders?: FolderNode[];
};

const project: FolderNode = {
  name: "project",

  files: [
    "README.md",
    "package.json"
  ],

  subFolders: [
    {
      name: "src",

      files: [
        "index.ts"
      ],

      subFolders: [
        {
          name: "components",

          files: [
            "Button.tsx",
            "Input.tsx"
          ]
        }
      ]
    },

    {
      name: "tests",

      files: [
        "app.test.ts"
      ]
    }
  ]
};

function printTree(
  node: FolderNode,
  depth = 0
): void {

  console.log(
    " ".repeat(depth * 2) +
    " " +
    node.name
  );

  node.files?.forEach(file => {
    console.log(
      " ".repeat(depth * 2 + 2) +
      " " +
      file
    );
  });

  node.subFolders?.forEach(folder => {
    printTree(folder, depth + 1);
  });
}

printTree(project);