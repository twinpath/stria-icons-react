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
var Dryer_exports = {};
__export(Dryer_exports, {
  default: () => Dryer_default
});
module.exports = __toCommonJS(Dryer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DryerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 0H80C35.818 0 0 35.816 0 80V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V80C448 35.816 412.184 0 368 0ZM400 448C400 456.824 392.822 464 384 464H64C55.178 464 48 456.824 48 448V80C48 62.355 62.355 48 80 48H368C385.645 48 400 62.355 400 80V448ZM128.053 104C128.053 90.75 117.227 80 104.035 80C90.721 80 80.018 90.75 80.018 104S90.721 128 104.035 128C117.227 128 128.053 117.25 128.053 104ZM184.053 128C197.244 128 207.947 117.25 207.947 104S197.244 80 184.053 80C170.738 80 160.035 90.75 160.035 104S170.738 128 184.053 128ZM224 160C148.836 160 87.982 220.875 87.982 296S148.836 432 224 432S360.018 371.125 360.018 296S299.164 160 224 160ZM224 384C183.844 384 150.258 356.816 139.73 320H176C189.25 320 200 309.25 200 296S189.25 272 176 272H139.73C150.258 235.184 183.844 208 224 208C272.533 208 312.018 247.477 312.018 296S272.533 384 224 384Z" })
  }
));
DryerRegular.displayName = "DryerRegular";
var Dryer_default = DryerRegular;
