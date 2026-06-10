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
var SquareArrowUpLeft_exports = {};
__export(SquareArrowUpLeft_exports, {
  default: () => SquareArrowUpLeft_default
});
module.exports = __toCommonJS(SquareArrowUpLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareArrowUpLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.656 32 0 60.656 0 96V416C0 451.344 28.656 480 64 480H384C419.344 480 448 451.344 448 416V96C448 60.656 419.344 32 384 32ZM334.625 366.625C328.375 372.875 320.188 376 312 376S295.625 372.875 289.375 366.625L168 245.25V312C168 329.688 153.688 344 136 344S104 329.688 104 312V168C104 150.312 118.312 136 136 136H280C297.688 136 312 150.312 312 168S297.688 200 280 200H213.25L334.625 321.375C347.125 333.875 347.125 354.125 334.625 366.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M334.625 366.625C328.375 372.875 320.188 376 312 376S295.625 372.875 289.375 366.625L168 245.25V312C168 329.688 153.688 344 136 344S104 329.688 104 312V168C104 150.312 118.312 136 136 136H280C297.688 136 312 150.312 312 168S297.688 200 280 200H213.25L334.625 321.375C347.125 333.875 347.125 354.125 334.625 366.625Z" })
    ]
  }
));
SquareArrowUpLeftDuotone.displayName = "SquareArrowUpLeftDuotone";
var SquareArrowUpLeft_default = SquareArrowUpLeftDuotone;
