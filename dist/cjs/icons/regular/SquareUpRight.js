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
var SquareUpRight_exports = {};
__export(SquareUpRight_exports, {
  default: () => SquareUpRight_default
});
module.exports = __toCommonJS(SquareUpRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareUpRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M127.834 306.91C118.465 316.281 118.465 331.484 127.834 340.852L139.146 352.164C148.516 361.535 163.719 361.535 173.088 352.164L237.658 287.594L279.031 328.969C283.625 333.562 289.766 336 296 336C299.094 336 302.219 335.406 305.188 334.188C314.156 330.469 320 321.719 320 312V184C320 170.75 309.25 160 296 160H168C158.297 160 149.547 165.844 145.828 174.812S144.172 194.094 151.031 200.969L192.404 242.344L127.834 306.91ZM0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32H64C28.654 32 0 60.656 0 96ZM48 96C48 87.18 55.178 80 64 80H384C392.822 80 400 87.18 400 96V416C400 424.82 392.822 432 384 432H64C55.178 432 48 424.82 48 416V96Z" })
  }
));
SquareUpRightRegular.displayName = "SquareUpRightRegular";
var SquareUpRight_default = SquareUpRightRegular;
