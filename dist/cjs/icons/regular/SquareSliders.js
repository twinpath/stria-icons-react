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
var SquareSliders_exports = {};
__export(SquareSliders_exports, {
  default: () => SquareSliders_default
});
module.exports = __toCommonJS(SquareSliders_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareSlidersRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM400 416C400 424.836 392.836 432 384 432H64C55.164 432 48 424.836 48 416V96C48 87.162 55.164 80 64 80H384C392.836 80 400 87.162 400 96V416ZM344 312H320V296C320 282.75 309.25 272 296 272S272 282.75 272 296V312H104C90.746 312 80 322.744 80 336C80 349.254 90.746 360 104 360H272V376C272 389.25 282.75 400 296 400S320 389.25 320 376V360H344C357.25 360 368 349.25 368 336S357.25 312 344 312ZM344 152H192V136C192 122.75 181.25 112 168 112S144 122.75 144 136V152H104C90.746 152 80 162.744 80 176C80 189.254 90.746 200 104 200H144V216C144 229.25 154.75 240 168 240S192 229.25 192 216V200H344C357.25 200 368 189.25 368 176S357.25 152 344 152Z" })
  }
));
SquareSlidersRegular.displayName = "SquareSlidersRegular";
var SquareSliders_default = SquareSlidersRegular;
