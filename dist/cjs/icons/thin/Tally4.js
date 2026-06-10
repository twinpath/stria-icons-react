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
var Tally4_exports = {};
__export(Tally4_exports, {
  default: () => Tally4_default
});
module.exports = __toCommonJS(Tally4_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Tally4Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 32C155.594 32 152 35.578 152 40V472C152 476.422 155.594 480 160 480S168 476.422 168 472V40C168 35.578 164.406 32 160 32ZM32 32C27.594 32 24 35.578 24 40V472C24 476.422 27.594 480 32 480S40 476.422 40 472V40C40 35.578 36.406 32 32 32ZM416 32C411.594 32 408 35.578 408 40V472C408 476.422 411.594 480 416 480S424 476.422 424 472V40C424 35.578 420.406 32 416 32ZM288 32C283.594 32 280 35.578 280 40V472C280 476.422 283.594 480 288 480S296 476.422 296 472V40C296 35.578 292.406 32 288 32Z" })
  }
));
Tally4Thin.displayName = "Tally4Thin";
var Tally4_default = Tally4Thin;
