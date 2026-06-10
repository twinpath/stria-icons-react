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
var LineColumns_exports = {};
__export(LineColumns_exports, {
  default: () => LineColumns_default
});
module.exports = __toCommonJS(LineColumns_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LineColumnsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216 56H8C3.594 56 0 59.594 0 64S3.594 72 8 72H216C220.406 72 224 68.406 224 64S220.406 56 216 56ZM216 184H8C3.594 184 0 187.594 0 192S3.594 200 8 200H216C220.406 200 224 196.406 224 192S220.406 184 216 184ZM216 312H8C3.594 312 0 315.594 0 320S3.594 328 8 328H216C220.406 328 224 324.406 224 320S220.406 312 216 312ZM216 440H8C3.594 440 0 443.594 0 448S3.594 456 8 456H216C220.406 456 224 452.406 224 448S220.406 440 216 440ZM296 72H504C508.406 72 512 68.406 512 64S508.406 56 504 56H296C291.594 56 288 59.594 288 64S291.594 72 296 72ZM504 184H296C291.594 184 288 187.594 288 192S291.594 200 296 200H504C508.406 200 512 196.406 512 192S508.406 184 504 184ZM504 312H296C291.594 312 288 315.594 288 320S291.594 328 296 328H504C508.406 328 512 324.406 512 320S508.406 312 504 312ZM504 440H296C291.594 440 288 443.594 288 448S291.594 456 296 456H504C508.406 456 512 452.406 512 448S508.406 440 504 440Z" })
  }
));
LineColumnsThin.displayName = "LineColumnsThin";
var LineColumns_default = LineColumnsThin;
