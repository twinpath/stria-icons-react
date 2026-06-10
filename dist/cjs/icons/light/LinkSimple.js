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
var LinkSimple_exports = {};
__export(LinkSimple_exports, {
  default: () => LinkSimple_default
});
module.exports = __toCommonJS(LinkSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinkSimpleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 96H384C375.156 96 368 103.156 368 112S375.156 128 384 128H480C550.594 128 608 185.422 608 256S550.594 384 480 384H384C375.156 384 368 391.156 368 400S375.156 416 384 416H480C568.219 416 640 344.219 640 256S568.219 96 480 96ZM256 384H160C89.406 384 32 326.578 32 256S89.406 128 160 128H256C264.844 128 272 120.844 272 112S264.844 96 256 96H160C71.781 96 0 167.781 0 256S71.781 416 160 416H256C264.844 416 272 408.844 272 400S264.844 384 256 384ZM176 256C176 264.844 183.156 272 192 272H448C456.844 272 464 264.844 464 256S456.844 240 448 240H192C183.156 240 176 247.156 176 256Z" })
  }
));
LinkSimpleLight.displayName = "LinkSimpleLight";
var LinkSimple_default = LinkSimpleLight;
