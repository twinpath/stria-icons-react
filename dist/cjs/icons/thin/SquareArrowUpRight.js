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
var SquareArrowUpRight_exports = {};
__export(SquareArrowUpRight_exports, {
  default: () => SquareArrowUpRight_default
});
module.exports = __toCommonJS(SquareArrowUpRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareArrowUpRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M130.342 338.344C127.225 341.461 127.215 346.531 130.342 349.656C133.467 352.785 138.539 352.773 141.654 349.656L304.002 187.312V328C304.002 332.422 307.582 336 312 336C316.424 336 320 332.422 320 328V168C320 163.578 316.42 160 312 160H152C147.58 160 144 163.578 144 168C144 172.418 147.58 176 152 176H292.688L130.342 338.344ZM0 96V416C0 451.348 28.652 480 64 480H384C419.348 480 448 451.348 448 416V96C448 60.656 419.348 32 384 32H64C28.652 32 0 60.656 0 96ZM16 96C16 69.531 37.531 48 64 48H384C410.469 48 432 69.531 432 96V416C432 442.469 410.469 464 384 464H64C37.531 464 16 442.469 16 416V96Z" })
  }
));
SquareArrowUpRightThin.displayName = "SquareArrowUpRightThin";
var SquareArrowUpRight_default = SquareArrowUpRightThin;
