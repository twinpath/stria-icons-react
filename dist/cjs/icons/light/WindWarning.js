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
var WindWarning_exports = {};
__export(WindWarning_exports, {
  default: () => WindWarning_default
});
module.exports = __toCommonJS(WindWarning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindWarningLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M184 352C184 365.254 194.746 376 208 376S232 365.254 232 352C232 338.744 221.254 328 208 328S184 338.744 184 352ZM340 372.406C306.562 410.281 258.438 432 208 432C110.969 432 32 353.031 32 256S110.969 80 208 80C294.344 80 367.312 141.688 381.562 226.656C383.031 235.375 391.125 241.281 400 239.781C408.719 238.313 414.594 230.063 413.125 221.344C396.281 120.906 310.031 48 208 48C93.312 48 0 141.312 0 256S93.312 464 208 464C267.625 464 324.469 438.344 364 393.594C369.844 386.969 369.219 376.844 362.594 371C356 365.188 345.844 365.812 340 372.406ZM224 272V144C224 135.156 216.844 128 208 128S192 135.156 192 144V272C192 280.844 199.156 288 208 288S224 280.844 224 272ZM464 224H544C596.938 224 640 180.938 640 128S596.938 32 544 32H496C487.156 32 480 39.156 480 48S487.156 64 496 64H544C579.281 64 608 92.719 608 128S579.281 192 544 192H464C455.156 192 448 199.156 448 208S455.156 224 464 224ZM544 288H336C327.156 288 320 295.156 320 304S327.156 320 336 320H544C579.281 320 608 348.719 608 384S579.281 448 544 448H496C487.156 448 480 455.156 480 464S487.156 480 496 480H544C596.938 480 640 436.938 640 384S596.938 288 544 288Z" })
  }
));
WindWarningLight.displayName = "WindWarningLight";
var WindWarning_default = WindWarningLight;
