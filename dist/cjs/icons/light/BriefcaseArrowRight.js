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
const BriefcaseArrowRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H384V48C384 21.531 362.469 0 336 0H176C149.531 0 128 21.531 128 48V96H64C28.654 96 0 124.654 0 160V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V160C512 124.654 483.348 96 448 96ZM160 48C160 39.172 167.172 32 176 32H336C344.828 32 352 39.172 352 48V96H160V48ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V160C32 142.355 46.355 128 64 128H448C465.645 128 480 142.355 480 160V416ZM379.293 276.668L299.313 196.688C293.063 190.438 282.938 190.438 276.688 196.688S270.438 213.063 276.688 219.312L329.375 272H144C135.156 272 128 279.156 128 288S135.156 304 144 304H329.375L276.688 356.688C270.438 362.938 270.438 373.063 276.688 379.312C279.812 382.438 283.906 384 288 384S296.188 382.438 299.312 379.312L379.293 299.332C380.777 297.852 381.955 296.078 382.77 294.109C384.387 290.199 384.387 285.801 382.77 281.891C381.955 279.922 380.777 278.148 379.293 276.668Z" })
  }
));
BriefcaseArrowRightLight.displayName = "BriefcaseArrowRightLight";
var BriefcaseArrowRight_default = BriefcaseArrowRightLight;
