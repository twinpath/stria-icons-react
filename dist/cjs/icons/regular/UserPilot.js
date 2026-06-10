var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var UserPilot_exports = {};
__export(UserPilot_exports, {
  default: () => UserPilot_default
});
module.exports = __toCommonJS(UserPilot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserPilotRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.695 352.508L224 416L128.305 352.508C57.053 355.211 0 413.418 0 485.332C0 500.059 11.941 512 26.664 512H421.336C436.059 512 448 500.059 448 485.332C448 413.418 390.953 355.211 319.695 352.508ZM50.689 464C58.732 432.791 84.059 408.574 116.248 402.113L197.463 455.996L209.525 464H50.689ZM238.477 464L250.539 455.996L331.752 402.113C363.941 408.574 389.268 432.791 397.312 464H238.477ZM78.545 102.408V146.453C119.143 164.918 169.381 176 224 176S328.857 164.918 369.455 146.453V102.408L391.416 80.104C395.98 75.469 398.545 69.178 398.545 62.623C398.545 51.275 390.943 41.387 380.105 38.637L231.762 0.971C226.666 -0.324 221.334 -0.324 216.238 0.971L67.895 38.637C57.057 41.387 49.455 51.275 49.455 62.623C49.455 69.178 52.02 75.469 56.584 80.104L78.545 102.408ZM161.688 72.844C165.656 64.969 175.25 61.75 183.156 65.688L224 86.125L264.844 65.687C272.781 61.719 282.344 64.937 286.312 72.844C290.25 80.75 287.062 90.344 279.156 94.312L231.156 118.312C228.906 119.438 226.438 120 224 120S219.094 119.438 216.844 118.312L168.844 94.312C160.938 90.344 157.75 80.75 161.688 72.844ZM224 272C182.77 272 149.096 240.488 144.846 200.361C128.129 197.127 112 192.809 96.449 187.547C96.396 189.059 96 190.475 96 192C96 262.688 153.312 320 224 320S352 262.688 352 192C352 190.475 351.604 189.059 351.551 187.547C336 192.809 319.871 197.127 303.154 200.361C298.904 240.488 265.23 272 224 272Z" })
  }
));
UserPilotRegular.displayName = "UserPilotRegular";
var UserPilot_default = UserPilotRegular;
