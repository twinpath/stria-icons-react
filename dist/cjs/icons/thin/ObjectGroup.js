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
const ObjectGroupThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 248V168C288 145.938 270.062 128 248 128H136C113.938 128 96 145.938 96 168V248C96 270.062 113.938 288 136 288H248C270.062 288 288 270.062 288 248ZM112 248V168C112 154.766 122.766 144 136 144H248C261.234 144 272 154.766 272 168V248C272 261.234 261.234 272 248 272H136C122.766 272 112 261.234 112 248ZM480 128C497.674 128 512 113.674 512 96V64C512 46.326 497.674 32 480 32H448C430.328 32 416 46.326 416 64V72H96V64C96 46.326 81.674 32 64 32H32C14.328 32 0 46.326 0 64V96C0 113.674 14.328 128 32 128H40V384H32C14.328 384 0 398.326 0 416V448C0 465.674 14.328 480 32 480H64C81.674 480 96 465.674 96 448V440H416V448C416 465.674 430.328 480 448 480H480C497.674 480 512 465.674 512 448V416C512 398.326 497.674 384 480 384H472V128H480ZM432 64C432 55.178 439.178 48 448 48H480C488.822 48 496 55.178 496 64V96C496 104.822 488.822 112 480 112H448C439.178 112 432 104.822 432 96V64ZM32 112C23.178 112 16 104.822 16 96V64C16 55.178 23.178 48 32 48H64C72.822 48 80 55.178 80 64V96C80 104.822 72.822 112 64 112H32ZM80 448C80 456.822 72.822 464 64 464H32C23.178 464 16 456.822 16 448V416C16 407.178 23.178 400 32 400H64C72.822 400 80 407.178 80 416V448ZM480 400C488.822 400 496 407.178 496 416V448C496 456.822 488.822 464 480 464H448C439.178 464 432 456.822 432 448V416C432 407.178 439.178 400 448 400H480ZM456 384H448C430.328 384 416 398.326 416 416V424H96V416C96 398.326 81.674 384 64 384H56V128H64C81.674 128 96 113.674 96 96V88H416V96C416 113.674 430.328 128 448 128H456V384ZM416 264V344C416 366.062 398.062 384 376 384H264C241.938 384 224 366.062 224 344V320C224 315.578 227.578 312 232 312S240 315.578 240 320V344C240 357.234 250.766 368 264 368H376C389.234 368 400 357.234 400 344V264C400 250.766 389.234 240 376 240H320C315.578 240 312 236.422 312 232S315.578 224 320 224H376C398.062 224 416 241.938 416 264Z" })
  }
));
ObjectGroupThin.displayName = "ObjectGroupThin";
var ObjectGroup_default = ObjectGroupThin;
