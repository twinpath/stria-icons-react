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
var SquarePollVertical_exports = {};
__export(SquarePollVertical_exports, {
  default: () => SquarePollVertical_default
});
module.exports = __toCommonJS(SquarePollVertical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquarePollVerticalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM400 416C400 424.836 392.836 432 384 432H64C55.164 432 48 424.836 48 416V96C48 87.162 55.164 80 64 80H384C392.836 80 400 87.162 400 96V416ZM224 128C210.75 128 200 138.75 200 152V360C200 373.25 210.75 384 224 384S248 373.25 248 360V152C248 138.75 237.25 128 224 128ZM320 288C306.75 288 296 298.75 296 312V360C296 373.25 306.75 384 320 384S344 373.25 344 360V312C344 298.75 333.25 288 320 288ZM128 224C114.75 224 104 234.75 104 248V360C104 373.25 114.75 384 128 384S152 373.25 152 360V248C152 234.75 141.25 224 128 224Z" })
  }
));
SquarePollVerticalRegular.displayName = "SquarePollVerticalRegular";
var SquarePollVertical_default = SquarePollVerticalRegular;
