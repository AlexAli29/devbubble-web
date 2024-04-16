import { useTagsQuery } from "@/app/entities";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/app/shared/ui/command";
import { PlusIcon } from "@/app/shared/ui/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/shared/ui/popover";
import { TagIconResolver } from "@/app/shared/ui/tag-icon-resolver";
import { useAddTagMutation } from "../models/queries";

export const AddTagButton = () => {
  const { data } = useTagsQuery();
  const { mutate } = useAddTagMutation();
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <div className=" bg-white shadow-none w-full h-full flex justify-center items-center hover:bg-slate-200 rounded-full p-0 transition-all">
          <PlusIcon className="stroke-black w-6" />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandGroup heading="Suggestions">
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {data?.map(({ id, icon, text }) => (
                <CommandItem
                  onSelect={() => mutate(id)}
                  className="flex items-center justify-start gap-4 pointer-events-auto "
                  key={id}
                >
                  <TagIconResolver className="w-7" tagIcon={icon} />
                  {text}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
{
}
