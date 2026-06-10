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
var CircleExclamationCheck_exports = {};
__export(CircleExclamationCheck_exports, {
  default: () => CircleExclamationCheck_default
});
module.exports = __toCommonJS(CircleExclamationCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleExclamationCheckThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 368C240 376.836 247.164 384 256 384S272 376.836 272 368S264.836 352 256 352S240 359.164 240 368ZM256 480C123.886 480 18.118 365.033 33.488 229.891C45.197 126.933 128.339 44.389 231.368 33.325C347.709 20.833 448.515 98.094 473.716 204.315C475.177 210.472 482.772 212.66 487.247 208.186L487.247 208.186C489.234 206.199 490.091 203.304 489.444 200.569C463.827 92.302 364.992 12.346 248.043 16.129C125.672 20.087 24.249 118.158 16.497 240.347C7.638 379.985 118.27 496 256 496C349.7 496 430.348 442.061 469.797 363.726C472.501 358.356 468.712 352 462.7 352H462.7C459.689 352 456.982 353.722 455.624 356.41C418.714 429.513 343.329 480 256 480ZM573.656 178.344C570.531 175.219 565.469 175.219 562.344 178.344L440 300.688L381.656 242.344C378.531 239.219 373.469 239.219 370.344 242.344S367.219 250.531 370.344 253.656L434.344 317.656C435.906 319.219 437.938 320 440 320S444.094 319.219 445.656 317.656L573.656 189.656C576.781 186.531 576.781 181.469 573.656 178.344ZM264 296V120C264 115.578 260.406 112 256 112S248 115.578 248 120V296C248 300.422 251.594 304 256 304S264 300.422 264 296Z" })
  }
));
CircleExclamationCheckThin.displayName = "CircleExclamationCheckThin";
var CircleExclamationCheck_default = CircleExclamationCheckThin;
