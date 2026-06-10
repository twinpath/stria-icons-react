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
var ListTree_exports = {};
__export(ListTree_exports, {
  default: () => ListTree_default
});
module.exports = __toCommonJS(ListTree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListTreeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 96C512 78.326 497.674 64 480 64H192C174.326 64 160 78.326 160 96S174.326 128 192 128H480C497.674 128 512 113.674 512 96ZM480 224H320C302.326 224 288 238.326 288 256S302.326 288 320 288H480C497.674 288 512 273.674 512 256S497.674 224 480 224ZM480 384H320C302.326 384 288 398.326 288 416S302.326 448 320 448H480C497.674 448 512 433.674 512 416S497.674 384 480 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 208H144C135.156 208 128 215.156 128 224V232H72V144H80C88.844 144 96 136.844 96 128V64C96 55.156 88.844 48 80 48H16C7.156 48 0 55.156 0 64V128C0 136.844 7.156 144 16 144H24V384C24 414.875 49.125 440 80 440H128V448C128 456.844 135.156 464 144 464H208C216.844 464 224 456.844 224 448V384C224 375.156 216.844 368 208 368H144C135.156 368 128 375.156 128 384V392H80C75.594 392 72 388.406 72 384V280H128V288C128 296.844 135.156 304 144 304H208C216.844 304 224 296.844 224 288V224C224 215.156 216.844 208 208 208Z" })
    ]
  }
));
ListTreeDuotone.displayName = "ListTreeDuotone";
var ListTree_default = ListTreeDuotone;
