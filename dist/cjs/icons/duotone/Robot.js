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
var Robot_exports = {};
__export(Robot_exports, {
  default: () => Robot_default
});
module.exports = __toCommonJS(Robot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RobotDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M41.375 233.375C35.375 239.375 32 247.5 32 256V384C32 392.5 35.375 400.625 41.375 406.625S55.5 416 64 416H96V224H64C55.5 224 47.375 227.375 41.375 233.375ZM598.625 233.375C592.625 227.375 584.5 224 576 224H544V416H576C584.5 416 592.625 412.625 598.625 406.625S608 392.5 608 384V256C608 247.5 604.625 239.375 598.625 233.375ZM320 0C302.375 0 288 14.375 288 32V96H352V32C352 14.375 337.625 0 320 0ZM192 416H256V384H192V416ZM288 416H352V384H288V416ZM384 416H448V384H384V416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H176C131.75 96 96 131.75 96 176V448C96 483.375 124.625 512 160 512H480C515.375 512 544 483.375 544 448V176C544 131.75 508.25 96 464 96ZM256 416H192V384H256V416ZM224 296C201.875 296 184 278.125 184 256S201.875 216 224 216S264 233.875 264 256S246.125 296 224 296ZM352 416H288V384H352V416ZM448 416H384V384H448V416ZM416 296C393.875 296 376 278.125 376 256S393.875 216 416 216S456 233.875 456 256S438.125 296 416 296Z" })
    ]
  }
));
RobotDuotone.displayName = "RobotDuotone";
var Robot_default = RobotDuotone;
