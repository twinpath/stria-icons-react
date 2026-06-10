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
var ObjectGroup_exports = {};
__export(ObjectGroup_exports, {
  default: () => ObjectGroup_default
});
module.exports = __toCommonJS(ObjectGroup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ObjectGroupRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 112V64C512 46.326 497.674 32 480 32H432C414.326 32 400 46.326 400 64H112C112 46.326 97.674 32 80 32H32C14.326 32 0 46.326 0 64V112C0 129.672 14.326 144 32 144V368C14.326 368 0 382.326 0 400V448C0 465.672 14.326 480 32 480H80C97.674 480 112 465.672 112 448H400C400 465.672 414.326 480 432 480H480C497.674 480 512 465.672 512 448V400C512 382.326 497.674 368 480 368V144C497.674 144 512 129.672 512 112ZM72 440H40V408H72V440ZM72 104H40V72H72V104ZM432 368C414.326 368 400 382.326 400 400H112C112 382.326 97.674 368 80 368V144C97.674 144 112 129.672 112 112H400C400 129.672 414.326 144 432 144V368ZM472 440H440V408H472V440ZM472 104H440V72H472V104ZM288 256V176C288 158.326 273.674 144 256 144H144C126.326 144 112 158.326 112 176V256C112 273.672 126.326 288 144 288H256C273.674 288 288 273.672 288 256ZM248 248H152V184H248V248ZM368 224H320V264H360V328H264V320H224V336C224 353.672 238.326 368 256 368H368C385.674 368 400 353.672 400 336V256C400 238.326 385.674 224 368 224Z" })
  }
));
ObjectGroupRegular.displayName = "ObjectGroupRegular";
var ObjectGroup_default = ObjectGroupRegular;
