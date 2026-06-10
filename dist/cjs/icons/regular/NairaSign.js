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
var NairaSign_exports = {};
__export(NairaSign_exports, {
  default: () => NairaSign_default
});
module.exports = __toCommonJS(NairaSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NairaSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 264H384V56C384 42.75 373.25 32 360 32S336 42.75 336 56V264H258.461L107.844 42.5C101.906 33.781 91.062 29.969 80.938 33.062C70.875 36.156 64 45.469 64 56V264H24C10.75 264 0 274.75 0 288S10.75 312 24 312H64V456C64 469.25 74.75 480 88 480S112 469.25 112 456V312H233.059L340.156 469.5C344.719 476.188 352.219 480 360 480C362.344 480 364.719 479.656 367.062 478.938C377.125 475.844 384 466.531 384 456V312H424C437.25 312 448 301.25 448 288S437.25 264 424 264ZM112 264V133.969L200.42 264H112ZM336 378.031L291.1 312H336V378.031Z" })
  }
));
NairaSignRegular.displayName = "NairaSignRegular";
var NairaSign_default = NairaSignRegular;
