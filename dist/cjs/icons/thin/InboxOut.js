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
var InboxOut_exports = {};
__export(InboxOut_exports, {
  default: () => InboxOut_default
});
module.exports = __toCommonJS(InboxOut_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InboxOutThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M138.828 134.141L248 24.969V277.656C248 282.063 251.578 285.656 256 285.656S264 282.063 264 277.656V24.969L373.172 134.141C376.297 137.266 381.359 137.266 384.484 134.141S387.609 125.953 384.484 122.828L261.656 0C258.531 -3.125 253.469 -3.125 250.344 0L127.516 122.828C125.953 124.391 125.172 126.422 125.172 128.484S125.953 132.578 127.516 134.141C130.641 137.266 135.703 137.266 138.828 134.141ZM472 317.656H352C348.969 317.656 346.188 319.375 344.844 322.094L315.062 381.656H196.938L167.156 322.094C165.812 319.375 163.031 317.656 160 317.656H40C17.938 317.656 0 335.594 0 357.656V469.656C0 491.719 17.938 509.656 40 509.656H472C494.062 509.656 512 491.719 512 469.656V357.656C512 335.594 494.062 317.656 472 317.656ZM496 469.656C496 482.875 485.219 493.656 472 493.656H40C26.781 493.656 16 482.875 16 469.656V357.656C16 344.438 26.781 333.656 40 333.656H155.062L184.844 393.219C186.188 395.938 188.969 397.656 192 397.656H320C323.031 397.656 325.812 395.938 327.156 393.219L356.938 333.656H472C485.219 333.656 496 344.438 496 357.656V469.656Z" })
  }
));
InboxOutThin.displayName = "InboxOutThin";
var InboxOut_default = InboxOutThin;
