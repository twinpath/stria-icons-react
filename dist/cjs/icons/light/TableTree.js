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
var TableTree_exports = {};
__export(TableTree_exports, {
  default: () => TableTree_default
});
module.exports = __toCommonJS(TableTree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TableTreeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.641 32 0 60.641 0 96V416C0 451.359 28.641 480 64 480H448C483.359 480 512 451.359 512 416V96C512 60.641 483.359 32 448 32ZM480 416C480 433.625 465.625 448 448 448H64C46.375 448 32 433.625 32 416V192H96V344C96 366.062 113.938 384 136 384H240C248.844 384 256 376.844 256 368S248.844 352 240 352H136C131.594 352 128 348.406 128 344V286.381C130.672 286.945 133.164 288 136 288H176C184.844 288 192 280.844 192 272S184.844 256 176 256H136C131.594 256 128 252.406 128 248V192H480V416ZM480 160H32V96C32 78.375 46.375 64 64 64H448C465.625 64 480 78.375 480 96V160ZM240 288H400C408.844 288 416 280.844 416 272S408.844 256 400 256H240C231.156 256 224 263.156 224 272S231.156 288 240 288ZM400 352H304C295.156 352 288 359.156 288 368S295.156 384 304 384H400C408.844 384 416 376.844 416 368S408.844 352 400 352Z" })
  }
));
TableTreeLight.displayName = "TableTreeLight";
var TableTree_default = TableTreeLight;
