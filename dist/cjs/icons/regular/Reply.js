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
var Reply_exports = {};
__export(Reply_exports, {
  default: () => Reply_default
});
module.exports = __toCommonJS(Reply_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ReplyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 336.009V456.002C512 469.251 501.25 480 488 480S464 469.251 464 456.002V336.009C464 278.669 417.344 232.016 360 232.016H88.506L215.688 341.853C225.719 350.508 226.812 365.664 218.156 375.694C213.406 381.194 206.719 384.006 200 384.006C194.438 384.006 188.844 382.1 184.312 378.163L8.312 226.173C3.031 221.611 0 214.986 0 208.018C0 201.049 3.031 194.425 8.312 189.863L184.312 37.873C194.312 29.154 209.469 30.279 218.156 40.341C226.812 50.372 225.719 65.527 215.688 74.183L88.506 184.019H360C443.812 184.019 512 252.202 512 336.009Z" })
  }
));
ReplyRegular.displayName = "ReplyRegular";
var Reply_default = ReplyRegular;
