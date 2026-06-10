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
var Bus_exports = {};
__export(Bus_exports, {
  default: () => Bus_default
});
module.exports = __toCommonJS(Bus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BusSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M520 128H512V80C512 35.25 412.75 0 288 0S64 35.25 64 80V128H56C42.75 128 32 138.75 32 152V232C32 245.25 42.75 256 56 256H64V416C64 433.625 78.375 448 96 448V480C96 497.625 110.375 512 128 512H160C177.625 512 192 497.625 192 480V448H384V480C384 497.625 398.375 512 416 512H448C465.625 512 480 497.625 480 480V448H486.375C502.375 448 512 435.25 512 422.375V256H520C533.25 256 544 245.25 544 232V152C544 138.75 533.25 128 520 128ZM208 64H368C376.836 64 384 71.162 384 80C384 88.836 376.836 96 368 96H208C199.164 96 192 88.836 192 80C192 71.162 199.164 64 208 64ZM144 400C126.375 400 112 385.625 112 368S126.375 336 144 336S176 350.375 176 368S161.625 400 144 400ZM272 288H160C142.375 288 128 273.625 128 256V160C128 142.375 142.375 128 160 128H272V288ZM304 288V128H416C433.625 128 448 142.375 448 160V256C448 273.625 433.625 288 416 288H304ZM432 400C414.375 400 400 385.625 400 368S414.375 336 432 336S464 350.375 464 368S449.625 400 432 400Z" })
  }
));
BusSolid.displayName = "BusSolid";
var Bus_default = BusSolid;
