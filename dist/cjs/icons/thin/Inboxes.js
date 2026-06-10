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
var Inboxes_exports = {};
__export(Inboxes_exports, {
  default: () => Inboxes_default
});
module.exports = __toCommonJS(Inboxes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InboxesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472 352H368C364.969 352 362.188 353.719 360.844 356.437L331.062 416H180.938L151.156 356.437C149.812 353.719 147.031 352 144 352H40C17.938 352 0 369.937 0 392V472C0 494.062 17.938 512 40 512H472C494.062 512 512 494.062 512 472V392C512 369.937 494.062 352 472 352ZM496 472C496 485.219 485.219 496 472 496H40C26.781 496 16 485.219 16 472V392C16 378.781 26.781 368 40 368H139.062L168.844 427.562C170.188 430.281 172.969 432 176 432H336C339.031 432 341.812 430.281 343.156 427.562L372.938 368H472C485.219 368 496 378.781 496 392V472ZM440 160H368C364.969 160 362.188 161.719 360.844 164.437L331.062 224H180.938L151.156 164.437C149.812 161.719 147.031 160 144 160H72C67.582 160 64 163.582 64 168S67.582 176 72 176H139.062L168.844 235.562C170.188 238.281 172.969 240 176 240H336C339.031 240 341.812 238.281 343.156 235.562L372.938 176H440C444.418 176 448 172.418 448 168S444.418 160 440 160ZM507.713 180.887L445.719 20.125C440.844 7.969 429.094 0 416 0H96C82.906 0 71.156 7.969 66.281 20.125L4.287 180.887C1.453 188.23 0 196.039 0 203.914V272C0 298.508 21.49 320 48 320H464C490.51 320 512 298.508 512 272V203.914C512 196.039 510.547 188.23 507.713 180.887ZM496 272C496 289.644 481.645 304 464 304H48C30.355 304 16 289.644 16 272V203.914C16 197.984 17.082 192.172 19.215 186.644L81.133 26.082C83.588 19.957 89.424 16 96 16H416C422.576 16 428.412 19.957 430.791 25.883L492.785 186.648C494.918 192.172 496 197.984 496 203.914V272Z" })
  }
));
InboxesThin.displayName = "InboxesThin";
var Inboxes_default = InboxesThin;
