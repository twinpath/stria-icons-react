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
var Rainbow_exports = {};
__export(Rainbow_exports, {
  default: () => Rainbow_default
});
module.exports = __toCommonJS(Rainbow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RainbowRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M300.25 32.678C147.375 42.804 32 176.826 32 330.226V455.996C32 469.198 42.8 480 56 480H56C69.2 480 80 469.198 80 455.996V319.974C80 178.577 202.847 65.383 347.399 81.43C469.913 95.032 560 203.504 560 326.791V442.215C560 469.299 570.8 480 584 480L584 480C597.2 480 608 469.198 608 455.996V319.974C608 154.697 468 21.301 300.25 32.678ZM294.75 130.068C198 142.445 128 229.584 128 327.225V455.996C128 469.198 138.8 480 152 480H152C165.2 480 176 469.198 176 455.996V320.474C176 236.21 248.5 168.7 334.375 177.201C409.25 184.452 464 251.713 464 326.85V455.996C464 469.198 474.8 480 488 480H488C501.2 480 512 469.198 512 455.996V320.474C512 206.206 411.75 115.066 294.75 130.068ZM300.875 225.834C255.25 234.71 224 277.342 224 323.725V455.996C224 469.198 234.8 480 248 480H248C261.2 480 272 469.198 272 455.996L272 321.777C272 298.561 287.686 277.269 310.481 272.884C341.152 266.983 368 290.356 368 319.974V455.996C368 469.198 378.8 480 392 480H392C405.2 480 416 469.198 416 455.996V319.974C416 260.715 362.25 213.957 300.875 225.834Z" })
  }
));
RainbowRegular.displayName = "RainbowRegular";
var Rainbow_default = RainbowRegular;
