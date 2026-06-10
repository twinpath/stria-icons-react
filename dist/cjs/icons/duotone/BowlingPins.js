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
var BowlingPins_exports = {};
__export(BowlingPins_exports, {
  default: () => BowlingPins_default
});
module.exports = __toCommonJS(BowlingPins_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BowlingPinsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M170.068 160.043C175.742 135.068 192 111.762 192 72.054C192 24.06 160 0.063 128.006 0C96 -0.062 64 24.06 64 72.054C64 111.762 80.258 135.068 85.932 160.043H170.068ZM425.604 192.039H342.396C334.555 250.698 288 309.359 288 368.018C288 421.417 310.285 463.678 326.422 494.799C331.932 505.423 342.82 512 354.789 512H413.301C425.297 512 436.205 505.389 441.703 494.729C457.748 463.615 480 421.378 480 368.018C480 309.359 433.445 250.698 425.604 192.039ZM426.068 160.043C431.742 135.068 448 111.762 448 72.054C448 24.06 416 0.063 384.006 0C352 -0.062 320 24.06 320 72.054C320 111.762 336.258 135.068 341.932 160.043H426.068ZM86.396 192.039C78.555 250.698 32 309.359 32 368.018C32 421.417 54.285 463.678 70.422 494.799C75.932 505.423 86.82 512 98.789 512H157.301C169.297 512 180.205 505.389 185.703 494.729C201.748 463.615 224 421.378 224 368.018C224 309.359 177.445 250.698 169.604 192.039H86.396Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M86.465 192.039H169.672L170.137 160.043H86L86.465 192.039ZM342 160.043L342.465 192.039H425.672L426.137 160.043H342Z" })
    ]
  }
));
BowlingPinsDuotone.displayName = "BowlingPinsDuotone";
var BowlingPins_default = BowlingPinsDuotone;
