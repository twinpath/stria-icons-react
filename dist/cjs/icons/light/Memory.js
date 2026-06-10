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
var Memory_exports = {};
__export(Memory_exports, {
  default: () => Memory_default
});
module.exports = __toCommonJS(Memory_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MemoryLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 146.938V128C576 92.654 547.348 64 512 64H64C28.654 64 0 92.654 0 128V146.938C18.6 153.549 32 171.131 32 192S18.6 230.451 0 237.062V416C0 433.674 14.328 448 32 448H544C561.674 448 576 433.674 576 416V237.062C557.4 230.451 544 212.869 544 192S557.4 153.549 576 146.938ZM544 416H496V400C496 391.164 488.838 384 480 384C471.164 384 464 391.164 464 400V416H368V400C368 391.164 360.838 384 352 384C343.164 384 336 391.164 336 400V416H240V400C240 391.164 232.838 384 224 384C215.164 384 208 391.164 208 400V416H112V400C112 391.164 104.838 384 96 384C87.164 384 80 391.164 80 400V416H32V320H544V416ZM544 128.213C524.248 143.053 512 166.545 512 192S524.248 240.947 544 255.785V288H32V255.785C51.754 240.947 64 217.455 64 192S51.754 143.053 32 128.213V128C32 110.355 46.355 96 64 96H512C529.645 96 544 110.355 544 128V128.213ZM160 128C151.156 128 144 135.156 144 144V240C144 248.844 151.156 256 160 256S176 248.844 176 240V144C176 135.156 168.844 128 160 128ZM288 128C279.156 128 272 135.156 272 144V240C272 248.844 279.156 256 288 256S304 248.844 304 240V144C304 135.156 296.844 128 288 128ZM416 128C407.156 128 400 135.156 400 144V240C400 248.844 407.156 256 416 256S432 248.844 432 240V144C432 135.156 424.844 128 416 128Z" })
  }
));
MemoryLight.displayName = "MemoryLight";
var Memory_default = MemoryLight;
