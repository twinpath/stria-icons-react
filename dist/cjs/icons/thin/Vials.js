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
var Vials_exports = {};
__export(Vials_exports, {
  default: () => Vials_default
});
module.exports = __toCommonJS(Vials_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VialsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216 32H8C3.594 32 0 35.594 0 40S3.594 48 8 48H216C220.406 48 224 44.406 224 40S220.406 32 216 32ZM184 80C179.594 80 176 83.594 176 88V248H48V88C48 83.594 44.406 80 40 80S32 83.594 32 88V400C32 444.125 67.875 480 112 480S192 444.125 192 400V88C192 83.594 188.406 80 184 80ZM176 400C176 435.281 147.281 464 112 464S48 435.281 48 400V264H176V400ZM504 32H296C291.594 32 288 35.594 288 40S291.594 48 296 48H504C508.406 48 512 44.406 512 40S508.406 32 504 32ZM472 80C467.594 80 464 83.594 464 88V248H336V88C336 83.594 332.406 80 328 80S320 83.594 320 88V400C320 444.125 355.875 480 400 480S480 444.125 480 400V88C480 83.594 476.406 80 472 80ZM464 400C464 435.281 435.281 464 400 464S336 435.281 336 400V264H464V400Z" })
  }
));
VialsThin.displayName = "VialsThin";
var Vials_default = VialsThin;
