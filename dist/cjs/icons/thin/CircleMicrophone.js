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
var CircleMicrophone_exports = {};
__export(CircleMicrophone_exports, {
  default: () => CircleMicrophone_default
});
module.exports = __toCommonJS(CircleMicrophone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleMicrophoneThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.516 32 256S132.486 32 256 32S480 132.484 480 256S379.514 480 256 480ZM360 216C355.578 216 352 219.578 352 224V256C352 308.938 308.938 352 256 352S160 308.938 160 256V224C160 219.578 156.422 216 152 216S144 219.578 144 224V256C144 315.008 190.039 363.008 248 367.191V416C248 420.422 251.578 424 256 424S264 420.422 264 416V367.191C321.961 363.008 368 315.008 368 256V224C368 219.578 364.422 216 360 216ZM256 320C291.297 320 320 291.297 320 256V160C320 124.703 291.297 96 256 96S192 124.703 192 160V256C192 291.297 220.703 320 256 320ZM208 160C208 133.531 229.531 112 256 112S304 133.531 304 160V256C304 282.469 282.469 304 256 304S208 282.469 208 256V160Z" })
  }
));
CircleMicrophoneThin.displayName = "CircleMicrophoneThin";
var CircleMicrophone_default = CircleMicrophoneThin;
