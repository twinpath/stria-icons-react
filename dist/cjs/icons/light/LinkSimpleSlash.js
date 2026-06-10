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
var LinkSimpleSlash_exports = {};
__export(LinkSimpleSlash_exports, {
  default: () => LinkSimpleSlash_default
});
module.exports = __toCommonJS(LinkSimpleSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinkSimpleSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 112C272 103.156 264.844 96 256 96H220.633L260.115 127.17C266.908 125.32 272 119.383 272 112ZM403.039 240L443.574 272H448C456.844 272 464 264.844 464 256S456.844 240 448 240H403.039ZM256 384H160C89.406 384 32 326.578 32 256C32 213.295 53.217 175.648 85.457 152.383L59.896 132.205C23.668 161.564 0 205.85 0 256C0 344.219 71.781 416 160 416H256C264.844 416 272 408.844 272 400S264.844 384 256 384ZM384 128H480C550.594 128 608 185.422 608 256C608 298.701 586.785 336.344 554.551 359.609L580.111 379.787C616.334 350.428 640 306.146 640 256C640 167.781 568.219 96 480 96H384C375.156 96 368 103.156 368 112S375.156 128 384 128ZM368 400C368 408.844 375.156 416 384 416H419.379L379.893 384.828C373.096 386.674 368 392.613 368 400ZM236.975 272L196.441 240H192C183.156 240 176 247.156 176 256S183.156 272 192 272H236.975ZM25.922 3.42C18.984 -2.033 8.922 -0.83 3.438 6.061C-2.031 12.998 -0.844 23.061 6.078 28.545L614.078 508.562C617.016 510.875 620.516 512 623.984 512C628.719 512 633.406 509.906 636.562 505.922C642.031 498.984 640.844 488.92 633.922 483.436L25.922 3.42Z" })
  }
));
LinkSimpleSlashLight.displayName = "LinkSimpleSlashLight";
var LinkSimpleSlash_default = LinkSimpleSlashLight;
