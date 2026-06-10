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
var LinkHorizontal_exports = {};
__export(LinkHorizontal_exports, {
  default: () => LinkHorizontal_default
});
module.exports = __toCommonJS(LinkHorizontal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinkHorizontalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 192H480C471.156 192 464 199.156 464 208S471.156 224 480 224H512C564.938 224 608 267.062 608 320S564.938 416 512 416H336C283.062 416 240 372.938 240 320S283.062 224 336 224H352C360.844 224 368 216.844 368 208S360.844 192 352 192H336C265.406 192 208 249.422 208 320S265.406 448 336 448H512C582.594 448 640 390.578 640 320S582.594 192 512 192ZM160 288H128C75.062 288 32 244.938 32 192S75.062 96 128 96H304C356.938 96 400 139.062 400 192S356.938 288 304 288H288C279.156 288 272 295.156 272 304S279.156 320 288 320H304C374.594 320 432 262.578 432 192S374.594 64 304 64H128C57.406 64 0 121.422 0 192S57.406 320 128 320H160C168.844 320 176 312.844 176 304S168.844 288 160 288Z" })
  }
));
LinkHorizontalLight.displayName = "LinkHorizontalLight";
var LinkHorizontal_default = LinkHorizontalLight;
