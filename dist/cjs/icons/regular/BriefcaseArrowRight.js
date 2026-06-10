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
var BriefcaseArrowRight_exports = {};
__export(BriefcaseArrowRight_exports, {
  default: () => BriefcaseArrowRight_default
});
module.exports = __toCommonJS(BriefcaseArrowRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BriefcaseArrowRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296.969 191.031C287.594 181.656 272.406 181.656 263.031 191.031S253.656 215.594 263.031 224.969L302.062 264H152C138.75 264 128 274.75 128 288S138.75 312 152 312H302.062L263.031 351.031C258.344 355.719 256 361.844 256 368S258.344 380.281 263.031 384.969C272.406 394.344 287.594 394.344 296.969 384.969L376.969 304.969C386.344 295.594 386.344 280.406 376.969 271.031L296.969 191.031ZM448 96H384V64C384 28.652 355.346 0 320 0H192C156.654 0 128 28.652 128 64V96H64C28.654 96 0 124.652 0 160V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V160C512 124.652 483.346 96 448 96ZM176 64C176 55.162 183.164 48 192 48H320C328.836 48 336 55.162 336 64V96H176V64ZM464 416C464 424.799 456.801 432 448 432H64C55.199 432 48 424.799 48 416V160C48 151.199 55.199 144 64 144H448C456.801 144 464 151.199 464 160V416Z" })
  }
));
BriefcaseArrowRightRegular.displayName = "BriefcaseArrowRightRegular";
var BriefcaseArrowRight_default = BriefcaseArrowRightRegular;
