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
var SquareHeart_exports = {};
__export(SquareHeart_exports, {
  default: () => SquareHeart_default
});
module.exports = __toCommonJS(SquareHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareHeartRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM224.031 154.625C192.812 130.188 148.375 129.594 118.469 154.719C100.281 169.812 89.219 192.031 88.094 215.594C86.938 239.219 95.781 262.344 112.344 279.062L197.062 364.812C204.281 372.031 213.812 376 223.969 376H224.062C234.219 375.969 243.75 371.969 250.906 364.719L335.594 279.062C352.125 262.406 361 239.344 359.906 215.781C358.844 192.187 347.844 169.937 329.719 154.75C299.781 129.625 255.219 130.125 224.031 154.625ZM301.5 245.281L223.938 323.719L146.469 245.312C139.344 238.125 135.531 228.125 136.031 217.906C136.531 207.562 141.188 198.25 149.219 191.562C155.25 186.5 162.781 184.031 170.5 184.031C180.406 184.031 190.656 188.094 198.5 196.063L224.156 221.344L249.75 195.844C263.5 181.938 285.062 180 298.906 191.562C306.844 198.219 311.5 207.594 311.969 217.969C312.438 228.312 308.719 238 301.5 245.281Z" })
  }
));
SquareHeartRegular.displayName = "SquareHeartRegular";
var SquareHeart_default = SquareHeartRegular;
