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
var DiscDrive_exports = {};
__export(DiscDrive_exports, {
  default: () => DiscDrive_default
});
module.exports = __toCommonJS(DiscDrive_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiscDriveThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 96C167.635 96 96 167.635 96 256S167.635 416 256 416S416 344.365 416 256S344.365 96 256 96ZM256 400C176.598 400 112 335.402 112 256S176.598 112 256 112S400 176.598 400 256S335.402 400 256 400ZM256 224C238.328 224 224 238.326 224 256S238.328 288 256 288C273.674 288 288 273.674 288 256S273.674 224 256 224ZM256 272C247.178 272 240 264.822 240 256S247.178 240 256 240S272 247.178 272 256S264.822 272 256 272ZM504 464H480V104C480 64.312 447.703 32 408 32H104C64.297 32 32 64.312 32 104V464H8C3.578 464 0 467.594 0 472S3.578 480 8 480H504C508.422 480 512 476.406 512 472S508.422 464 504 464ZM464 464H48V104C48 73.125 73.125 48 104 48H408C438.875 48 464 73.125 464 104V464Z" })
  }
));
DiscDriveThin.displayName = "DiscDriveThin";
var DiscDrive_default = DiscDriveThin;
