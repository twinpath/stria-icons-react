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
var Radio_exports = {};
__export(Radio_exports, {
  default: () => Radio_default
});
module.exports = __toCommonJS(Radio_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RadioRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 272H208C216.8 272 224 264.8 224 256V256C224 247.2 216.8 240 208 240H112C103.2 240 96 247.2 96 256V256C96 264.8 103.2 272 112 272ZM208 368H112C103.2 368 96 375.2 96 384V384C96 392.8 103.2 400 112 400H208C216.8 400 224 392.8 224 384V384C224 375.2 216.8 368 208 368ZM224 304H96C87.2 304 80 311.2 80 320V320C80 328.8 87.2 336 96 336H224C232.8 336 240 328.8 240 320V320C240 311.2 232.8 304 224 304ZM352 240C307.844 240 272 275.844 272 320S307.844 400 352 400S432 364.156 432 320S396.156 240 352 240ZM439.994 127.992H201.248L494.369 47.131C507.148 43.6 514.648 30.381 511.133 17.615C507.617 4.834 494.354 -2.619 481.619 0.85L52.859 119.133C21.734 127.711 0 156.258 0 188.541V439.998C0 479.701 32.297 512 71.998 512H439.994C479.697 512 511.992 479.701 511.992 439.998V199.994C511.992 160.291 479.697 127.992 439.994 127.992ZM463.994 439.998C463.994 453.232 453.229 463.998 439.994 463.998H71.998C58.766 463.998 48 453.232 48 439.998V199.994C48 186.76 58.766 175.994 71.998 175.994H439.994C453.229 175.994 463.994 186.76 463.994 199.994V439.998Z" })
  }
));
RadioRegular.displayName = "RadioRegular";
var Radio_default = RadioRegular;
