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
var Subscript_exports = {};
__export(Subscript_exports, {
  default: () => Subscript_default
});
module.exports = __toCommonJS(Subscript_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SubscriptRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M328 112C341.25 112 352 101.25 352 88S341.25 64 328 64H288C279.969 64 272.469 68 268.031 74.688L176 212.734L83.969 74.688C79.531 68 72.031 64 64 64H24C10.75 64 0 74.75 0 88S10.75 112 24 112H51.156L147.156 256L51.156 400H24C10.75 400 0 410.75 0 424S10.75 448 24 448H64C72.031 448 79.531 444 83.969 437.312L176 299.266L268.031 437.312C272.469 444 279.969 448 288 448H328C341.25 448 352 437.25 352 424S341.25 400 328 400H300.844L204.844 256L300.844 112H328ZM488 464H472V312C472 298.75 461.25 288 448 288H408C394.75 288 384 298.75 384 312S394.75 336 408 336H424V464H408C394.75 464 384 474.75 384 488S394.75 512 408 512H488C501.25 512 512 501.25 512 488S501.25 464 488 464Z" })
  }
));
SubscriptRegular.displayName = "SubscriptRegular";
var Subscript_default = SubscriptRegular;
