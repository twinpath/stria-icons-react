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
var CircleUser_exports = {};
__export(CircleUser_exports, {
  default: () => CircleUser_default
});
module.exports = __toCommonJS(CircleUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleUserRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C211.934 448 171.41 432.922 138.971 407.865C159.469 383.609 189.818 368 224 368H288C322.182 368 352.467 383.66 372.949 407.924C340.523 432.945 300.031 448 256 448ZM407.381 373.676C378.084 340.795 335.508 320 288 320H224C176.484 320 133.934 340.816 104.658 373.727C79.279 341.174 64 300.379 64 256C64 150.131 150.131 64 256 64S448 150.131 448 256C448 300.355 432.736 341.133 407.381 373.676ZM256 112C207.398 112 168 151.398 168 200C168 248.6 207.398 288 256 288S344 248.6 344 200C344 151.398 304.602 112 256 112ZM256 240C233.943 240 216 222.055 216 200C216 177.943 233.943 160 256 160S296 177.943 296 200C296 222.055 278.057 240 256 240Z" })
  }
));
CircleUserRegular.displayName = "CircleUserRegular";
var CircleUser_default = CircleUserRegular;
