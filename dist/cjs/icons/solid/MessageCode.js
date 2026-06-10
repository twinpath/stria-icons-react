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
var MessageCode_exports = {};
__export(MessageCode_exports, {
  default: () => MessageCode_default
});
module.exports = __toCommonJS(MessageCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageCodeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.994V352C0 387.248 28.75 415.994 64 415.994H160V499.961C160 509.709 171.25 515.459 179.125 509.709L304 415.994H448C483.25 415.994 512 387.248 512 352V63.994C512 28.748 483.25 0 448 0ZM216.062 262.156C225.906 271.031 226.703 286.188 217.844 296.062C213.094 301.312 206.562 304 200 304C194.266 304 188.531 301.969 183.938 297.844L103.938 225.844C98.891 221.281 96 214.812 96 208S98.891 194.719 103.938 190.156L183.938 118.156C193.813 109.312 208.969 110.125 217.844 119.938C226.703 129.813 225.906 144.969 216.062 153.844L155.875 208L216.062 262.156ZM408.062 225.844L328.062 297.844C323.469 301.969 317.734 304 312 304C305.438 304 298.906 301.312 294.156 296.062C285.297 286.187 286.094 271.031 295.938 262.156L356.125 208L295.937 153.844C286.094 144.969 285.297 129.812 294.156 119.938C303.031 110.094 318.203 109.313 328.062 118.156L408.062 190.156C413.109 194.719 416 201.188 416 208S413.109 221.281 408.062 225.844Z" })
  }
));
MessageCodeSolid.displayName = "MessageCodeSolid";
var MessageCode_default = MessageCodeSolid;
