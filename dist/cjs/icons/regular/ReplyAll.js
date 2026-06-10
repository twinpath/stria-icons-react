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
var ReplyAll_exports = {};
__export(ReplyAll_exports, {
  default: () => ReplyAll_default
});
module.exports = __toCommonJS(ReplyAll_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ReplyAllRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M60.719 208.018L215.687 74.183C225.719 65.527 226.812 50.372 218.156 40.341C209.469 30.279 194.344 29.154 184.312 37.873L8.312 189.863C3.031 194.425 0 201.049 0 208.018C0 214.986 3.031 221.611 8.312 226.173L184.312 378.163C188.844 382.1 194.438 384.006 200 384.006C206.719 384.006 213.406 381.194 218.156 375.694C226.812 365.664 225.719 350.508 215.688 341.853L60.719 208.018ZM424 184.019H216.506L343.688 74.183C353.719 65.527 354.812 50.372 346.156 40.341C337.469 30.279 322.312 29.154 312.312 37.873L136.312 189.863C131.031 194.425 128 201.049 128 208.018C128 214.986 131.031 221.611 136.312 226.173L312.312 378.163C316.844 382.1 322.437 384.006 328 384.006C334.719 384.006 341.406 381.194 346.156 375.694C354.812 365.664 353.719 350.508 343.688 341.853L216.506 232.016H424C481.344 232.016 528 278.669 528 336.009V456.002C528 469.251 538.75 480 552 480S576 469.251 576 456.002V336.009C576 252.202 507.812 184.019 424 184.019Z" })
  }
));
ReplyAllRegular.displayName = "ReplyAllRegular";
var ReplyAll_default = ReplyAllRegular;
