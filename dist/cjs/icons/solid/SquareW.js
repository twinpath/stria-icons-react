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
var SquareW_exports = {};
__export(SquareW_exports, {
  default: () => SquareW_default
});
module.exports = __toCommonJS(SquareW_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareWSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM366.938 159.062L302.938 367.062C299.844 377.141 290.516 384 280 384H279.578C268.875 383.812 259.609 376.562 256.828 366.234L224 244.312L191.172 366.234C188.391 376.562 179.125 383.812 168.422 384C157.688 383.984 148.203 377.266 145.062 367.062L81.062 159.062C77.156 146.391 84.266 132.953 96.938 129.062C109.594 125.203 123.031 132.266 126.938 144.938L166.469 273.391L200.828 145.766C203.641 135.281 213.141 128 224 128S244.359 135.281 247.172 145.766L281.531 273.391L321.063 144.937C324.953 132.266 338.406 125.234 351.063 129.062C363.734 132.953 370.844 146.391 366.938 159.062Z" })
  }
));
SquareWSolid.displayName = "SquareWSolid";
var SquareW_default = SquareWSolid;
