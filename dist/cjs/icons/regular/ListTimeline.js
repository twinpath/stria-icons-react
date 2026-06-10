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
var ListTimeline_exports = {};
__export(ListTimeline_exports, {
  default: () => ListTimeline_default
});
module.exports = __toCommonJS(ListTimeline_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListTimelineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 224C30.334 224 16 238.332 16 256C16 273.666 30.334 288 48 288S80 273.666 80 256C80 238.332 65.666 224 48 224ZM48 384C30.334 384 16 398.332 16 416C16 433.666 30.334 448 48 448S80 433.666 80 416C80 398.332 65.666 384 48 384ZM48 64C30.334 64 16 78.332 16 96C16 113.666 30.334 128 48 128S80 113.666 80 96C80 78.332 65.666 64 48 64ZM480 192H198.627C190.141 192 182.002 195.371 176 201.373L132.686 244.686C126.437 250.936 126.437 261.064 132.686 267.314L176 310.627C182.002 316.629 190.141 320 198.627 320H480C497.674 320 512 305.672 512 288V224C512 206.326 497.674 192 480 192ZM464 272H205.254L189.254 256L205.254 240H464V272ZM416 352H198.627C190.141 352 182.002 355.371 176 361.373L132.686 404.686C126.437 410.936 126.437 421.064 132.686 427.314L176 470.627C182.002 476.629 190.141 480 198.627 480H416C433.674 480 448 465.672 448 448V384C448 366.326 433.674 352 416 352ZM400 432H205.254L189.254 416L205.254 400H400V432ZM176 150.627C182.002 156.629 190.141 160 198.627 160H416C433.674 160 448 145.672 448 128V64C448 46.326 433.674 32 416 32H198.627C190.141 32 182.002 35.371 176 41.373L132.686 84.686C126.437 90.936 126.437 101.064 132.686 107.314L176 150.627ZM205.254 80H400V112H205.254L189.254 96L205.254 80Z" })
  }
));
ListTimelineRegular.displayName = "ListTimelineRegular";
var ListTimeline_default = ListTimelineRegular;
