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
var UserHelmetSafety_exports = {};
__export(UserHelmetSafety_exports, {
  default: () => UserHelmetSafety_default
});
module.exports = __toCommonJS(UserHelmetSafety_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserHelmetSafetyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M88 176H360C364.375 176 368 172.375 368 168V136C368 131.625 364.375 128 360 128H352C352 81.625 323.5 42.5 283.25 25.625L256 80V16C256 7.125 248.875 0 240 0H208C199.125 0 192 7.125 192 16V80L164.75 25.625C124.5 42.5 96 81.625 96 128H88C83.625 128 80 131.625 80 136V168C80 172.375 83.625 176 88 176ZM224 272C186 272 153.25 245.25 145.625 208H97.625C105.625 271 158.75 320 224 320S342.5 271 350.375 208H302.375C294.75 245.25 262 272 224 272ZM314.664 352H133.336C59.699 352 0 411.695 0 485.332C0 500.059 11.941 512 26.664 512H421.336C436.059 512 448 500.059 448 485.332C448 411.695 388.307 352 314.664 352ZM50.699 464C60.197 427.236 93.645 400 133.336 400H314.664C354.355 400 387.803 427.236 397.301 464H50.699Z" })
  }
));
UserHelmetSafetyRegular.displayName = "UserHelmetSafetyRegular";
var UserHelmetSafety_default = UserHelmetSafetyRegular;
