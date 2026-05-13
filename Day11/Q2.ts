enum Role {
  Admin = "Admin",
  Editor = "Editor",
  Guest = "Guest",
}

const permissionMap: Record<Role, boolean> = {
  [Role.Admin]: true,
  [Role.Editor]: true,
  [Role.Guest]: false,
};

function canAccess(role: Role): boolean {
  return permissionMap[role];
}

console.log(canAccess(Role.Admin));
console.log(canAccess(Role.Guest));

const broken: Record<Role, boolean> = {
  [Role.Admin]: true,
  [Role.Editor]: true,
};