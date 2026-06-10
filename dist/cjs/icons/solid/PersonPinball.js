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
var PersonPinball_exports = {};
__export(PersonPinball_exports, {
  default: () => PersonPinball_default
});
module.exports = __toCommonJS(PersonPinball_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonPinballSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 95.998C106.5 95.998 128 74.498 128 47.998C128 21.5 106.5 0 80 0S32 21.5 32 47.998C32 74.498 53.5 95.998 80 95.998ZM0 352.131V480C0 497.672 14.326 512 32 512S64 497.672 64 480V405.986L2.479 354.715C1.551 353.938 0.895 352.939 0 352.131ZM624 0H528C519.164 0 512 7.162 512 16V58.807C512 62.246 512.555 65.662 513.643 68.926L554.428 191.281L253.777 244.969C249.262 232.773 237.773 224 224 224H163.781L129.031 154.469C120.812 138.156 104.375 128 86.125 128H48C21.531 128 0 149.531 0 176V281C0 300 8.375 317.906 23.031 330.188L96 391V480C96 497.688 110.312 512 128 512S160 497.688 160 480V391C160 372 151.625 354.094 136.969 341.812L96 307.67V231.531L115.375 270.313C120.781 281.156 131.875 288 144 288H192V496C192 504.836 199.164 512 208 512H240C248.836 512 256 504.836 256 496V384H576V496C576 504.836 583.164 512 592 512H624C632.836 512 640 504.836 640 496V16C640 7.162 632.836 0 624 0ZM264 328C250.746 328 240 317.254 240 304C240 290.744 250.746 280 264 280S288 290.744 288 304C288 317.254 277.254 328 264 328Z" })
  }
));
PersonPinballSolid.displayName = "PersonPinballSolid";
var PersonPinball_default = PersonPinballSolid;
