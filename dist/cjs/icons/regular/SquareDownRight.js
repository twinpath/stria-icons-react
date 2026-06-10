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
var SquareDownRight_exports = {};
__export(SquareDownRight_exports, {
  default: () => SquareDownRight_default
});
module.exports = __toCommonJS(SquareDownRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareDownRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192.404 269.656L151.031 311.031C144.172 317.906 142.109 328.219 145.828 337.188S158.297 352 168 352H296C309.25 352 320 341.25 320 328V200C320 190.281 314.156 181.531 305.188 177.812C302.219 176.594 299.094 176 296 176C289.766 176 283.625 178.438 279.031 183.031L237.658 224.406L173.088 159.836C163.719 150.465 148.516 150.465 139.146 159.836L127.834 171.148C118.465 180.516 118.465 195.719 127.834 205.09L192.404 269.656ZM64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480ZM48 96C48 87.18 55.178 80 64 80H384C392.822 80 400 87.18 400 96V416C400 424.82 392.822 432 384 432H64C55.178 432 48 424.82 48 416V96Z" })
  }
));
SquareDownRightRegular.displayName = "SquareDownRightRegular";
var SquareDownRight_default = SquareDownRightRegular;
